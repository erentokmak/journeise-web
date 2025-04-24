import { gql } from '@apollo/client'

export const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($input: appointments_insert_input!) {
    insert_appointments_one(object: $input) {
      id
      business_id
      customer_id
      team_member_id
      service_id
      appointment_date
      start_time
      end_time
      price_charged
      status
      cancellation_reason
      notes
      is_deleted
      created_at
      updated_at
    }
  }
`