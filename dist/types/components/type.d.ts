import { OpcionTypes } from "../setters"


export type ContentData = {
    "data": string
    "type": string
    "x": number
    "y": number
}

export type OpsText = {
    "type" : OpcionTypes.text
    "font": string
    "fillStyle": string
    "textAlign": string
}

export type DataTextOption = {
    "data": string
    "canvasOptions": OpsText
}

export type ContentDataText = ContentData & DataTextOption


export type DataNumberOption = {
    "data": number
    "canvasOptions": OpsText
}

export type ContentDataNumber = ContentData & DataNumberOption


export type OpsImg = {
    "width": number // valid if type of image is image
    "height": number
}

export type Layer = ContentDataText|ContentDataImg|ContentDataQR|ContentDataBarcode


export type DataImgOptions = {
    "data": string
    "type": OpcionTypes.image 
    "width": number
    "height": number
    "canvasOptions":  OpsImg
}

export type ContentDataImg = ContentData & DataImgOptions


export enum QRLevels {
    L = "L",
    M = "M",
    Q = "Q",
    H = "H"
}

export type OpsQR = {
    "level": QRLevels
    "width": number,
    "height": number,
}

export type DataQROptions = {
    "type": OpcionTypes.qr 
    "canvasOptions":  OpsQR
}

export type ContentDataQR = ContentData & DataQROptions


export type Opsbarcode = {
    "width": number // valid if type of image is image
    "height": number
}

export type DataBarcodeOptions = {
    "type": OpcionTypes.barcode
    "canvasOptions":  Opsbarcode
}

export type ContentDataBarcode = ContentData & DataBarcodeOptions