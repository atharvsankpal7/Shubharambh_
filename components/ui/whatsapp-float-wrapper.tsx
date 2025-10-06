import { getHeaderData } from '@/lib/actions';
import { WhatsAppFloat } from './whatsapp-float';

export async function WhatsAppFloatWrapper() {
  const headerData = await getHeaderData();
  
  return (
    <WhatsAppFloat 
      phoneNumber={"+91 81809 39260".replace(/\s+/g, '')}
      message="Hello! I'm interested in your products and would like to know more."
    />
  );
}