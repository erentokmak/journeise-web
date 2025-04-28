import { CONTACT_INFO } from '@/constants/contact'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { MapPin, Phone, Mail } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Adres
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {CONTACT_INFO.address}
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Telefon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {CONTACT_INFO.phone}
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            E-posta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {CONTACT_INFO.email}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
} 