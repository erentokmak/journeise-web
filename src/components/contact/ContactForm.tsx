import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'
import { Calendar } from '@/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { Checkbox } from '@/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { ContactFormData, ServiceType, VisaType, InsuranceType, FlightType } from '@/types/contact'

const formSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
  serviceType: z.nativeEnum(ServiceType),
  serviceDetails: z.object({
    visaType: z.nativeEnum(VisaType).optional(),
    travelDates: z.object({
      startDate: z.string().optional(),
      endDate: z.string().optional(),
    }).optional(),
    destinationCountry: z.string().optional(),
    insuranceType: z.nativeEnum(InsuranceType).optional(),
    isCarTravel: z.boolean().optional(),
    flightType: z.nativeEnum(FlightType).optional(),
    insuranceDates: z.object({
      startDate: z.string().optional(),
      endDate: z.string().optional(),
    }).optional(),
  }),
})

const COUNTRIES = [
  'Türkiye',
  'Almanya',
  'Fransa',
  'İtalya',
  'İspanya',
  'Amerika Birleşik Devletleri',
  'İngiltere',
  'Kanada',
  'Japonya',
  'Güney Kore',
]

export function ContactForm() {
  const [selectedService, setSelectedService] = useState<ServiceType>(ServiceType.VISA)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [insuranceStartDate, setInsuranceStartDate] = useState<Date>()
  const [insuranceEndDate, setInsuranceEndDate] = useState<Date>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      serviceType: ServiceType.VISA,
      serviceDetails: {
        flightType: FlightType.ROUND_TRIP,
      },
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>İletişim Formu</CardTitle>
        <CardDescription>
          Bizimle iletişime geçmek için aşağıdaki formu doldurun.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-2 mb-4">
              <Button
                type="button"
                variant={selectedService === ServiceType.VISA ? 'default' : 'outline'}
                onClick={() => setSelectedService(ServiceType.VISA)}
                className="flex-1"
              >
                Vize Danışmanlığı
              </Button>
              <Button
                type="button"
                variant={selectedService === ServiceType.HOTEL ? 'default' : 'outline'}
                onClick={() => setSelectedService(ServiceType.HOTEL)}
                className="flex-1"
              >
                Otel Konaklama
              </Button>
              <Button
                type="button"
                variant={selectedService === ServiceType.FLIGHT ? 'default' : 'outline'}
                onClick={() => setSelectedService(ServiceType.FLIGHT)}
                className="flex-1"
              >
                Uçak Biletleri
              </Button>
              <Button
                type="button"
                variant={selectedService === ServiceType.INSURANCE ? 'default' : 'outline'}
                onClick={() => setSelectedService(ServiceType.INSURANCE)}
                className="flex-1"
              >
                Seyahat Sağlık Sigortası
              </Button>
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adınız Soyadınız</FormLabel>
                  <FormControl>
                    <Input placeholder="Adınız Soyadınız" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-posta Adresiniz</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="ornek@email.com" {...field} />
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
                  <FormLabel>Telefon Numaranız</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="5XX XXX XX XX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedService === ServiceType.VISA && (
              <FormField
                control={form.control}
                name="serviceDetails.visaType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vize Türü</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Vize türünü seçin" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={VisaType.USA}>Amerika Birleşik Devletleri</SelectItem>
                        <SelectItem value={VisaType.SCHENGEN}>Schengen</SelectItem>
                        <SelectItem value={VisaType.UK}>İngiltere</SelectItem>
                        <SelectItem value={VisaType.CANADA}>Kanada</SelectItem>
                        <SelectItem value={VisaType.OTHER}>Diğer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {selectedService === ServiceType.HOTEL && (
              <>
                <FormField
                  control={form.control}
                  name="serviceDetails.destinationCountry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gidilecek Ülke</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Ülke seçin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {COUNTRIES.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="serviceDetails.travelDates.startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Giriş Tarihi</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="w-full pl-3 text-left font-normal"
                              >
                                {startDate ? (
                                  format(startDate, 'PPP', { locale: tr })
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
                              selected={startDate}
                              onSelect={(date) => {
                                setStartDate(date)
                                field.onChange(date?.toISOString())
                              }}
                              disabled={(date) => date < new Date()}
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
                    name="serviceDetails.travelDates.endDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Çıkış Tarihi</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="w-full pl-3 text-left font-normal"
                              >
                                {endDate ? (
                                  format(endDate, 'PPP', { locale: tr })
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
                              selected={endDate}
                              onSelect={(date) => {
                                setEndDate(date)
                                field.onChange(date?.toISOString())
                              }}
                              disabled={(date) => date < (startDate || new Date())}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {selectedService === ServiceType.FLIGHT && (
              <>
                <FormField
                  control={form.control}
                  name="serviceDetails.destinationCountry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gidilecek Ülke</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Ülke seçin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {COUNTRIES.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
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
                  name="serviceDetails.flightType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Uçuş Tipi</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value={FlightType.ROUND_TRIP} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Gidiş-Dönüş
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value={FlightType.ONE_WAY} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Tek Yön
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="serviceDetails.travelDates.startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Gidiş Tarihi</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="w-full pl-3 text-left font-normal"
                              >
                                {startDate ? (
                                  format(startDate, 'PPP', { locale: tr })
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
                              selected={startDate}
                              onSelect={(date) => {
                                setStartDate(date)
                                field.onChange(date?.toISOString())
                              }}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch('serviceDetails.flightType') === FlightType.ROUND_TRIP && (
                    <FormField
                      control={form.control}
                      name="serviceDetails.travelDates.endDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Dönüş Tarihi</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className="w-full pl-3 text-left font-normal"
                                >
                                  {endDate ? (
                                    format(endDate, 'PPP', { locale: tr })
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
                                selected={endDate}
                                onSelect={(date) => {
                                  setEndDate(date)
                                  field.onChange(date?.toISOString())
                                }}
                                disabled={(date) => date < (startDate || new Date())}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </>
            )}

            {selectedService === ServiceType.INSURANCE && (
              <>
                <FormField
                  control={form.control}
                  name="serviceDetails.insuranceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sigorta Türü</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sigorta türünü seçin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={InsuranceType.TRAVEL}>Seyahat Sağlık Sigortası</SelectItem>
                          <SelectItem value={InsuranceType.GREEN}>Yeşil Sigorta</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="serviceDetails.insuranceDates.startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Sigorta Başlangıç Tarihi</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="w-full pl-3 text-left font-normal"
                              >
                                {insuranceStartDate ? (
                                  format(insuranceStartDate, 'PPP', { locale: tr })
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
                              selected={insuranceStartDate}
                              onSelect={(date) => {
                                setInsuranceStartDate(date)
                                field.onChange(date?.toISOString())
                              }}
                              disabled={(date) => date < new Date()}
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
                    name="serviceDetails.insuranceDates.endDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Sigorta Bitiş Tarihi</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="w-full pl-3 text-left font-normal"
                              >
                                {insuranceEndDate ? (
                                  format(insuranceEndDate, 'PPP', { locale: tr })
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
                              selected={insuranceEndDate}
                              onSelect={(date) => {
                                setInsuranceEndDate(date)
                                field.onChange(date?.toISOString())
                              }}
                              disabled={(date) => date < (insuranceStartDate || new Date())}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="serviceDetails.isCarTravel"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Araç ile seyahat edeceğim</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mesajınız</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mesajınızı buraya yazın..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Gönder
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 