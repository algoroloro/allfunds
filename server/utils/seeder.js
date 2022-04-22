const mongoose = require('mongoose')
const New = require('../models/new.js')
require('../config/dbconnect.js')

const news = [
    {
        title: 'New 1',
        description: 'This is the description of the new 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum lectus et eros lobortis accumsan. Vestibulum eu leo at arcu tempus eleifend ut in ligula. Integer tempor, diam in tincidunt pulvinar, diam est feugiat nisl, nec vehicula dolor neque ac velit. Duis et finibus tortor. Ut vel odio turpis. Etiam et neque magna. Maecenas vitae auctor lectus. Suspendisse viverra sagittis magna, non maximus tellus pharetra quis. Nunc vitae enim et sem tincidunt porta nec maximus lectus. Duis turpis dui, vestibulum eu viverra quis, tempor id est. Pellentesque quis pretium elit.',
        author: 'Author 1'
    },
    {
        title: 'New 2',
        description: 'This is the description of the new 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum lectus et eros lobortis accumsan. Vestibulum eu leo at arcu tempus eleifend ut in ligula. Integer tempor, diam in tincidunt pulvinar, diam est feugiat nisl, nec vehicula dolor neque ac velit. Duis et finibus tortor. Ut vel odio turpis. Etiam et neque magna. Maecenas vitae auctor lectus. Suspendisse viverra sagittis magna, non maximus tellus pharetra quis. Nunc vitae enim et sem tincidunt porta nec maximus lectus. Duis turpis dui, vestibulum eu viverra quis, tempor id est. Pellentesque quis pretium elit.',
        author: 'Author 1',
        archiveDate: new Date('04/23/2022')
    },
    {
        title: 'New 3',
        description: 'This is the description of the new 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum lectus et eros lobortis accumsan. Vestibulum eu leo at arcu tempus eleifend ut in ligula. Integer tempor, diam in tincidunt pulvinar, diam est feugiat nisl, nec vehicula dolor neque ac velit. Duis et finibus tortor. Ut vel odio turpis. Etiam et neque magna. Maecenas vitae auctor lectus. Suspendisse viverra sagittis magna, non maximus tellus pharetra quis. Nunc vitae enim et sem tincidunt porta nec maximus lectus. Duis turpis dui, vestibulum eu viverra quis, tempor id est. Pellentesque quis pretium elit.',
        author: 'Author 2'
    },
    {
        title: 'New 4',
        description: 'This is the description of the new 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum lectus et eros lobortis accumsan. Vestibulum eu leo at arcu tempus eleifend ut in ligula. Integer tempor, diam in tincidunt pulvinar, diam est feugiat nisl, nec vehicula dolor neque ac velit. Duis et finibus tortor. Ut vel odio turpis. Etiam et neque magna. Maecenas vitae auctor lectus. Suspendisse viverra sagittis magna, non maximus tellus pharetra quis. Nunc vitae enim et sem tincidunt porta nec maximus lectus. Duis turpis dui, vestibulum eu viverra quis, tempor id est. Pellentesque quis pretium elit.',
        author: 'Author 2',
        archiveDate: new Date('04/23/2022')
    },
]

const seedDb = async () => {
    await New.deleteMany({})
    await New.insertMany(news)
}

seedDb().then(() => {
    console.log('---> DATABASE SEEDED')
    mongoose.connection.close().then(() => console.log('---> DATABASE CONNECTION CLOSED'))
})
