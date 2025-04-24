import { gql } from '@apollo/client'

/**
 * Yeni müşteri oluşturmak için mutation
 * @param input - Müşteri bilgileri (business_id, full_name, phone, email, quickesta_user_id, is_quickesta_user, created_at)
 * @returns Oluşturulan müşterinin id, quickesta_user_id ve is_quickesta_user bilgileri
 */
export const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($input: customers_insert_input!) {
    insert_customers_one(object: $input) {
      id
      business_id
      quickesta_user_id
      is_quickesta_user
      full_name
      phone
      email
      notes
      is_deleted
      created_at
      updated_at
    }
  }
`

/**
 * Müşterinin Quickesta bilgilerini güncellemek için mutation
 * @param customer_id - Güncellenecek müşterinin ID'si
 * @param quickesta_user_id - Quickesta kullanıcı ID'si
 * @returns Güncellenen müşterinin id, quickesta_user_id ve is_quickesta_user bilgileri
 */
export const UPDATE_CUSTOMER_QUICKESTA_INFO = gql`
  mutation UpdateCustomerQuickestaInfo($customer_id: Int!, $quickesta_user_id: uuid!) {
    update_customers_by_pk(
      pk_columns: { id: $customer_id },
      _set: { 
        quickesta_user_id: $quickesta_user_id,
        is_quickesta_user: true
      }
    ) {
      id
      quickesta_user_id
      is_quickesta_user
      updated_at
    }
  }
`
