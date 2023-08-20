module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'info@somosmasqueenergiadcsas.com',
                from: '${email}',
                subject: `${asunto}`,
                text: '${nombre} dice: ${mensaje}. Su correo es: ${email} y su teléfono es: ${telefono}',
                html: 'prueba',
            });
        } catch (error) {
            console.log(error);
        }
    },
};
