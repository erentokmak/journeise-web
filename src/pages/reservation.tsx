import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Calendar } from "@/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { BARBERS, AVAILABLE_HOURS } from "@/constants/data";
import { toast } from "sonner";
import Image from "next/image";
import { Card, CardContent } from "@/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  date: z.date({
    required_error: "Lütfen bir tarih seçin",
  }),
  time: z.string({
    required_error: "Lütfen bir saat seçin",
  }),
  barber: z.string({
    required_error: "Lütfen bir berber seçin",
  }),
  service: z.string({
    required_error: "Lütfen bir hizmet seçin",
  }),
});

export default function ReservationPage() {
  const [selectedBarber, setSelectedBarber] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Rezervasyonunuz başarıyla alındı!");
    form.reset();
    setSelectedBarber("");
  }

  const selectedBarberData = BARBERS.find((barber) => barber.id.toString() === selectedBarber);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-center text-5xl font-bold">Rezervasyon</h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Profesyonel ekibimizle tanışın ve randevunuzu hemen alın.
        </p>
        <div className="mx-auto max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="barber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Berber Seçin</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {BARBERS.map((barber) => (
                          <Card
                            key={barber.id}
                            className={cn(
                              "cursor-pointer transition-all hover:scale-105",
                              selectedBarber === barber.id.toString() && "border-2 border-primary"
                            )}
                            onClick={() => {
                              field.onChange(barber.id.toString());
                              setSelectedBarber(barber.id.toString());
                            }}
                          >
                            <CardContent className="p-4">
                              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg">
                                <Image
                                  src={barber.image}
                                  alt={barber.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h3 className="text-center text-lg font-semibold">{barber.name}</h3>
                              <p className="text-center text-sm text-muted-foreground">
                                {barber.experience} Yıl Deneyim
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {selectedBarberData && (
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hizmet</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Hizmet seçin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {selectedBarberData.services.map((service) => (
                            <SelectItem key={service.id} value={service.id.toString()}>
                              {service.name} - {service.price} TL ({service.duration} dk)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Tarih</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Tarih seçin</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Saat</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Saat seçin" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {AVAILABLE_HOURS.map((hour) => (
                          <SelectItem key={hour} value={hour}>
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ad Soyad</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Adınız ve soyadınız"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Telefon numaranız"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Rezervasyon Yap
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
} 