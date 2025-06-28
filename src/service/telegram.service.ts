import { DATA } from "../utils/data";

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export function formatFormDataForTelegram(formData: typeof DATA) {
    return `
📄 *Nuevo formulario recibido* 📄
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Empresa:* ${formData.company}
*Tipo de proyecto:* ${formData.projectType}
*Presupuesto:* ${formData.budget}
*Timeline:* ${formData.timeline}
*Descripción:*
${formData.description}
  `;
}

export async function sendTelegramMessage(formData: typeof DATA) {
    const customData = formatFormDataForTelegram(formData);

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${customData}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Telegram message sent:', data);
        })
        .catch((error) => {
            console.error('Error sending Telegram message:', error);
        });
}
