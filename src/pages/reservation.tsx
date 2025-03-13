import { useState } from "react";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { AVAILABLE_HOURS, BARBERS } from "@/constants/data";
import { IBarber, IService } from "@/types/barber.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

const formSchema = z.object({
  customerName: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  customerPhone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  customerEmail: z.string().email("Geçerli bir email adresi giriniz"),
});

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState<IBarber | null>(null);
  const [selectedService, setSelectedService] = useState<IService | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({
      ...values,
      barberId: selectedBarber?.id,
      serviceId: selectedService?.id,
      date: selectedDate,
      time: selectedTime,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BARBERS.map((barber) => (
              <Card
                key={barber.id}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  selectedBarber?.id === barber.id
                    ? "border-2 border-primary"
                    : ""
                }`}
                onClick={() => setSelectedBarber(barber)}
              >
                <CardContent className="p-4">
                  <div className="relative mb-4 h-48 w-full">
                    <Image
                      src={barber.image}
                      alt={barber.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{barber.name}</h3>
                  <p className="text-gray-400">
                    {barber.experience} Yıl Deneyim
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedBarber?.services.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  selectedService?.id === service.id
                    ? "border-2 border-primary"
                    : ""
                }`}
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
                  <p className="mb-2 text-gray-400">
                    Süre: {service.duration} dakika
                  </p>
                  <p className="text-primary">{service.price} TL</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Tarih Seçin</h3>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            {selectedDate && (
              <div>
                <h3 className="mb-4 text-lg font-semibold">Saat Seçin</h3>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
                  {AVAILABLE_HOURS.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ad Soyad</FormLabel>
                    <FormControl>
                      <Input placeholder="Ad Soyad" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input placeholder="Telefon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Rezervasyonu Tamamla</Button>
            </form>
          </Form>
        );

      default:
        return null;
    }
  };

  const canGoNext = () => {
    switch (step) {
      case 1:
        return selectedBarber !== null;
      case 2:
        return selectedService !== null;
      case 3:
        return selectedDate !== "" && selectedTime !== "";
      default:
        return false;
    }
  };

  return (
    <main className="min-h-screen bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Online Rezervasyon
        </h1>

        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  s === step
                    ? "bg-primary text-white"
                    : "border border-gray-600 text-gray-600"
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">{renderStep()}</div>

        <div className="flex justify-between">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Geri
            </Button>
          )}
          {step < 4 && (
            <Button
              className="ml-auto"
              onClick={() => setStep(step + 1)}
              disabled={!canGoNext()}
            >
              İleri
            </Button>
          )}
        </div>
      </div>
    </main>
  );
} 