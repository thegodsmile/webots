import {VRML} from './utility/utility.js';

export const ProtoModel = {
  'ProtoCylinder': {
    'supported': {'myRadiusRadius': VRML.SFFloat, 'myHeightHeight': VRML.SFFloat},
    'unsupported': {}
  },
  'TinkerbotsPlasticAppearance': {
    'supported': {'color': VRML.SFString, 'occlusionMapUrl': VRML.MFString},
    'unsupported': {}
  },
  'TinkerbotsAxle': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'endSlot': VRML.SFNode, 'length': VRML.SFString},
    'unsupported': {}
  },
  'TinkerbotsBase': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'controller': VRML.SFString, 'controllerArgs': VRML.MFString, 'customData': VRML.SFString, 'supervisor': VRML.SFBool, 'synchronization': VRML.SFBool, 'selfCollision': VRML.SFBool, 'upSlot': VRML.SFNode, 'upASlot': VRML.SFNode, 'upBSlot': VRML.SFNode, 'upCSlot': VRML.SFNode, 'upDSlot': VRML.SFNode, 'downSlot': VRML.SFNode, 'downASlot': VRML.SFNode, 'downBSlot': VRML.SFNode, 'downCSlot': VRML.SFNode, 'downDSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'leftASlot': VRML.SFNode, 'leftBSlot': VRML.SFNode, 'leftCSlot': VRML.SFNode, 'leftDSlot': VRML.SFNode, 'rightSlot': VRML.SFNode, 'rightASlot': VRML.SFNode, 'rightBSlot': VRML.SFNode, 'rightCSlot': VRML.SFNode, 'rightDSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'backASlot': VRML.SFNode, 'backBSlot': VRML.SFNode, 'backCSlot': VRML.SFNode, 'backDSlot': VRML.SFNode, 'extensionSlot': VRML.MFNode},
    'unsupported': {}
  },
  'TinkerbotsBrickAdapter': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString},
    'unsupported': {}
  },
  'TinkerbotsCube': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'upSlot': VRML.SFNode, 'upASlot': VRML.SFNode, 'upBSlot': VRML.SFNode, 'upCSlot': VRML.SFNode, 'upDSlot': VRML.SFNode, 'downSlot': VRML.SFNode, 'downASlot': VRML.SFNode, 'downBSlot': VRML.SFNode, 'downCSlot': VRML.SFNode, 'downDSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'leftASlot': VRML.SFNode, 'leftBSlot': VRML.SFNode, 'leftCSlot': VRML.SFNode, 'leftDSlot': VRML.SFNode, 'rightSlot': VRML.SFNode, 'rightASlot': VRML.SFNode, 'rightBSlot': VRML.SFNode, 'rightCSlot': VRML.SFNode, 'rightDSlot': VRML.SFNode, 'frontSlot': VRML.SFNode, 'frontASlot': VRML.SFNode, 'frontBSlot': VRML.SFNode, 'frontCSlot': VRML.SFNode, 'frontDSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'backASlot': VRML.SFNode, 'backBSlot': VRML.SFNode, 'backCSlot': VRML.SFNode, 'backDSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsCubieBoxWithCrossSlots': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'upSlot': VRML.SFNode, 'frontSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'rightSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsCubieBoxWithRoundSlots': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'upSlot': VRML.SFNode, 'frontSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'axisSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsCubieFemaleCube': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'upSlot': VRML.SFNode, 'frontSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'rightSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsCubieMaleCube': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'upSlot': VRML.SFNode, 'frontSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'rightSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsCubiePyramid': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'color': VRML.SFString, 'frontSlot': VRML.SFNode, 'backSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsDistanceSensor': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'numberOfRays': VRML.SFInt32, 'aperture': VRML.SFFloat, 'upSlot': VRML.SFNode, 'upASlot': VRML.SFNode, 'upBSlot': VRML.SFNode, 'upCSlot': VRML.SFNode, 'upDSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'leftASlot': VRML.SFNode, 'leftBSlot': VRML.SFNode, 'leftCSlot': VRML.SFNode, 'leftDSlot': VRML.SFNode, 'rightSlot': VRML.SFNode, 'rightASlot': VRML.SFNode, 'rightBSlot': VRML.SFNode, 'rightCSlot': VRML.SFNode, 'rightDSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'backASlot': VRML.SFNode, 'backBSlot': VRML.SFNode, 'backCSlot': VRML.SFNode, 'backDSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsFinger': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString},
    'unsupported': {}
  },
  'TinkerbotsGrabber': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'fingerASlot': VRML.SFNode, 'fingerBSlot': VRML.SFNode, 'fingerCSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsLEDAppearance': {
    'supported': {},
    'unsupported': {}
  },
  'TinkerbotsLightSensor': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'upSlot': VRML.SFNode, 'upASlot': VRML.SFNode, 'upBSlot': VRML.SFNode, 'upCSlot': VRML.SFNode, 'upDSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'leftASlot': VRML.SFNode, 'leftBSlot': VRML.SFNode, 'leftCSlot': VRML.SFNode, 'leftDSlot': VRML.SFNode, 'rightSlot': VRML.SFNode, 'rightASlot': VRML.SFNode, 'rightBSlot': VRML.SFNode, 'rightCSlot': VRML.SFNode, 'rightDSlot': VRML.SFNode, 'backSlot': VRML.SFNode, 'backASlot': VRML.SFNode, 'backBSlot': VRML.SFNode, 'backCSlot': VRML.SFNode, 'backDSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsMotor': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'upSlot': VRML.SFNode, 'upASlot': VRML.SFNode, 'upBSlot': VRML.SFNode, 'upCSlot': VRML.SFNode, 'upDSlot': VRML.SFNode, 'leftSlot': VRML.SFNode, 'leftASlot': VRML.SFNode, 'leftBSlot': VRML.SFNode, 'leftCSlot': VRML.SFNode, 'leftDSlot': VRML.SFNode, 'rightSlot': VRML.SFNode, 'rightASlot': VRML.SFNode, 'rightBSlot': VRML.SFNode, 'rightCSlot': VRML.SFNode, 'rightDSlot': VRML.SFNode, 'frontSlot': VRML.SFNode, 'backSlot': VRML.SFNode},
    'unsupported': {}
  },
  'TinkerbotsPivot': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'name': VRML.SFString, 'slot': VRML.SFNode, 'ASlot': VRML.SFNode, 'BSlot': VRML.SFNode, 'CSlot': VRML.SFNode, 'DSlot': VRML.SFNode},
    'unsupported': {}
  },
  'Name': {
    'supported': {},
    'unsupported': {}
  }
};
