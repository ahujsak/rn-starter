/* eslint-disable flowtype/require-valid-file-annotation */

/* globals jest */
jest.mock('react-native-device-info', () => ({ getDeviceLocale: jest.fn() }))
