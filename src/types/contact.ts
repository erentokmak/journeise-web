export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  serviceType: ServiceType
  serviceDetails: ServiceDetails
}

export interface ServiceDetails {
  visaType?: VisaType
  travelDates?: {
    startDate: string
    endDate: string
  }
  destinationCountry?: string
  insuranceType?: InsuranceType
  isCarTravel?: boolean
  flightType?: FlightType
  insuranceDates?: {
    startDate: string
    endDate: string
  }
}

export enum ServiceType {
  VISA = 'VISA',
  HOTEL = 'HOTEL',
  FLIGHT = 'FLIGHT',
  INSURANCE = 'INSURANCE'
}

export enum VisaType {
  USA = 'USA',
  SCHENGEN = 'SCHENGEN',
  UK = 'UK',
  CANADA = 'CANADA',
  OTHER = 'OTHER'
}

export enum InsuranceType {
  TRAVEL = 'TRAVEL',
  GREEN = 'GREEN'
}

export enum FlightType {
  ONE_WAY = 'ONE_WAY',
  ROUND_TRIP = 'ROUND_TRIP'
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
}

export interface CountryInfo {
  name: string
  description: string
  details: string[]
} 