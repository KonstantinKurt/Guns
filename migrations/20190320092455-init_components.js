const createCollection = async (db) => {
    await db.createCollection('components');
};
module.exports = {
    async up(db) {
        try {
            const col = await db.listCollections({ name: 'components' }).toArray()
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
            await db.dropCollection('components')
        } catch (err) {
            throw err
        }
    },
}
