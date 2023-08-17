module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi
                .plugin('email')
                .service('email')
                .send({
                    to: 'info@somosmasqueenergiadcsas.com',
                    from: result.email,
                    subject: result.asunto,
                    text: `${result.nombre} dice: 

                ${result.mensaje}.
                
                Su correo es: ${result.email} y su teléfono es: ${result.telefono}`,
                });
        } catch (error) {
            console.log(error);
        }
    },
};
