import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">İletişim</h1>
        <p className="text-muted-foreground text-lg">
          Bizimle iletişime geçin ve seyahat planlarınızı birlikte yapalım.
        </p>
      </div>

      <div className="mx-auto">
        <ContactForm />
      </div>
      <ContactInfo />
    </div>
  )
} 