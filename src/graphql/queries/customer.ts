import { gql } from '@apollo/client'

/**
 * Email veya telefon numarası ile müşteri aramak için query
 * @param email - Müşteri email adresi
 * @param phone - Müşteri telefon numarası
 * @returns Bulunan müşterinin id, email, phone, quickesta_user_id ve is_quickesta_user bilgileri
 */
export const GET_CUSTOMER_BY_EMAIL_AND_PHONE = gql`
  query GetCustomerByEmailAndPhone($email: String!, $phone: String!) {
    customers(where: { _or: [{ email: { _eq: $email } }, { phone: { _eq: $phone } }] }) {
      id
      email
      phone
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