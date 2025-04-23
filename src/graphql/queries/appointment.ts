import { gql } from '@apollo/client'

export const GET_AVAILABLE_TIME_SLOTS = gql`
  query GetAvailableTimeSlots($business_id: Int!, $date: date!) {
    appointments(
      where: {
        business_id: { _eq: $business_id }
        appointment_date: { _eq: $date }
        is_deleted: { _eq: false }
        status: { _eq: "scheduled" }
      }
    ) {
      id
      start_time
      end_time
    }
  }
`

export const GET_CUSTOMER_BY_PHONE = gql`
  query GetCustomerByPhone($business_id: Int!, $phone: String!) {
    customers(
      where: {
        business_id: { _eq: $business_id }
        phone: { _eq: $phone }
        is_deleted: { _eq: false }
      }
    ) {
      id
      business_id
      full_name
      phone
      email
      notes
      quickesta_user_id
      is_quickesta_user
    }
  }
`

export const GET_CUSTOMER_BY_EMAIL = gql`
  query GetCustomerByEmail($business_id: Int!, $email: String!) {
    customers(
      where: {
        business_id: { _eq: $business_id }
        email: { _eq: $email }
        is_deleted: { _eq: false }
      }
    ) {
      id
      business_id
      full_name
      phone
      email
      notes
      quickesta_user_id
      is_quickesta_user
    }
  }
`

export const GET_CUSTOMER_BY_EMAIL_OR_PHONE = gql`
  query GetCustomerByEmailOrPhone($business_id: Int!, $email: String!, $phone: String!) {
    customers(
      where: {
        business_id: { _eq: $business_id }
        _or: [
          { email: { _eq: $email } },
          { phone: { _eq: $phone } }
        ]
        is_deleted: { _eq: false }
      }
    ) {
      id
      business_id
      full_name
      phone
      email
      notes
      quickesta_user_id
      is_quickesta_user
    }
  }
`

export const CHECK_QUICKESTA_ACCOUNT = gql`
  query CheckQuickestaAccount($email: String!, $phone: String!) {
    users(
      where: {
        _or: [
          { email: { _eq: $email } },
          { phone: { _eq: $phone } }
        ]
      }
    ) {
      id
      email
      phone
      full_name
    }
  }
`

export const GET_CUSTOMER_APPOINTMENTS = gql`
  query GetCustomerAppointments($customer_id: Int!) {
    appointments(
      where: {
        customer_id: { _eq: $customer_id }
        is_deleted: { _eq: false }
      }
      order_by: { appointment_date: desc, start_time: desc }
    ) {
      id
      appointment_date
      start_time
      end_time
      price_charged
      status
      notes
      service_id
      team_member_id
    }
  }
`

export const CHECK_APPOINTMENT_AVAILABILITY = gql`
  query CheckAppointmentAvailability(
    $business_id: Int!
    $appointment_date: date!
    $start_time: time!
    $end_time: time!
  ) {
    appointments(
      where: {
        business_id: { _eq: $business_id }
        appointment_date: { _eq: $appointment_date }
        _and: [
          { start_time: { _lt: $end_time } }
          { end_time: { _gt: $start_time } }
        ]
        is_deleted: { _eq: false }
        status: { _eq: "scheduled" }
      }
    ) {
      id
      start_time
      end_time
    }
  }
` 