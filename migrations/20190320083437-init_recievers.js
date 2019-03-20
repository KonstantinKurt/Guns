const createCollection = async (db) => {
    await db.createCollection('recievers');
};
module.exports = {
    async up(db) {
        try {
            const col = await db.listCollections({ name: 'recievers' }).toArray()
            if (col.length > 0) {
                throw new Error('Collection games already exists')
            } else {
                await createCollection(db)
            }
        } catch (err) {
            throw err
        }
    },

    async down(db) {
        try {
            await db.dropCollection('recievers')
        } catch (err) {
            throw err
        }
    },
}