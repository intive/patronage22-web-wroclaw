declare module "react-qr-code" {
  export class QRCode extends React.Component<QRCodeProps & any, any> {}

  interface QRCodeProps {
    value: string;
    size?: number;
  }
}
