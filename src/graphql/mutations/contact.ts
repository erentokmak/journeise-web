import { gql } from '@apollo/client'

export const CREATE_CONTACT = gql`
  mutation CreateContact($input: contacts_insert_input!) {
    insert_contacts_one(object: $input) {
      id
      business_id
      service_id
      customer_id
      contact_type
      name
      email
      phone
      subject
      message
      details
      status
      is_deleted
      created_at
      updated_at
    }
  }
`

export interface CreateContactInput {
  business_id?: number
  service_id: number
  customer_id?: number
  contact_type: string
  name: string
  email: string
  phone?: string
  subject?: string
  message?: string
  details?: Record<string, any>
  status?: string
}

export interface CreateContactResponse {
  insert_contacts_one: {
    id: number
    business_id?: number
    service_id: number
    customer_id?: number
    contact_type: string
    name: string
    email: string
    phone?: string
    subject?: string
    message?: string
    details?: Record<string, any>
    status?: string
    is_deleted: boolean
    created_at: string
    updated_at?: string
  }
} 