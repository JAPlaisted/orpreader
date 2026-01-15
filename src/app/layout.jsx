import '../../styles/globals.scss';
import './globals.css';

export const metadata = {
  title: 'My Template',
  description: 'Kickstart web apps fast.',
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
