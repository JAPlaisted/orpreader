import '../../styles/globals.scss';
import './globals.css';

export const metadata = {
  title: 'ORP Reader',
  description: 'Read faster without losing focus',
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
