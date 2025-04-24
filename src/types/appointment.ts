/**
 * @file appointment.ts
 * @description Randevu işlemleri ile ilgili tip tanımlamaları
 */

/**
 * Randevu bilgilerini içeren interface
 */
export interface IAppointment {
  id: number;
  start_time: string;
  end_time: string;
}

/**
 * Müşteri bilgilerini içeren interface
 */
export interface ICustomer {
  id: number;
  business_id: number;
  full_name: string;
  phone: string;
  email?: string;
  notes?: string;
  quickesta_user_id?: number;
  is_quickesta_user: boolean;
}

/**
 * GraphQL sorgu yanıt tipleri
 */
export interface ICustomerByPhoneResponse {
  customers: ICustomer[];
}

export interface IAvailableTimeSlotsResponse {
  appointments: IAppointment[];
}

export interface ICheckAvailabilityResponse {
  appointments: IAppointment[];
} 