import { ThunkMiddleware } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { AnyAction } from 'redux'
import {
  initialState,
  makeStore,
  authSlice,
  paymentsSlice,
  customerAddressSlice,
  knownErrorSlice,
  canvasSlice,
  activationSlice,
  setValidPayment,
  setCustomerAddress,
  setKnownError,
  setErrorObj,
  updateCanvasContent,
  setActivation,
  Address,
  setShowPaymentModal,
  setTokenizedCard,
  setCleanTokenizedCard,
  setIsNewCustomer
} from './index'

let store: ToolkitStore<
  {
    canvas: { init: boolean; content: string }
    payments: { validPayment: boolean }
    authModule: { isNewCustomer: boolean }
    activation: {
      currentProvider: string
      isNoInternetConnected: boolean
      cableType: string
      date: string
      timeOfAppointment: string
      timeOfAppointmentLabel: string
      quoteUpdated: boolean
    }
    customerAddress: {
      assignShippingAddressToQuoteReady: boolean
      assignShippingAddressToQuoteSuccess: boolean
      movingOption: string | null
      serviceAddress: Address | null
      shippingAddress: Address | null
      creditAssessmentAddress: Address | null
    }
    knownError: { type: string; errorObj: unknown }
  },
  AnyAction,
  [
    ThunkMiddleware<
      {
        canvas: { init: boolean; content: string }
        payments: { validPayment: boolean }
        authModule: { isNewCustomer: boolean }
        activation: {
          currentProvider: string
          isNoInternetConnected: boolean
          cableType: string
          date: string
          timeOfAppointment: string
          timeOfAppointmentLabel: string
          quoteUpdated: boolean
        }
        customerAddress: {
          assignShippingAddressToQuoteReady: boolean
          assignShippingAddressToQuoteSuccess: boolean
          movingOption: string | null
          serviceAddress: Address | null
          shippingAddress: Address | null
          creditAssessmentAddress: Address | null
        }
        knownError: { type: string; errorObj: unknown }
      },
      AnyAction
    >
  ]
>
