# TO-DO list REST API Server

Follow below steps in order to start the application.

Install npm packages using `npm i` or `npm install`.
Run application server using `npm start` or `npm run start`.

You can access the app at [http://localhost:3000/](http://localhost:3000/).

POST request URI: 
`HOST_URL/todos`
JSON Request Body: 
```{
     title: {
        type: String,
        required: "title is required"
    },
    /**
     * Todo created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /**
     * todo content.
     */
    content: {
        type: String
    },
    /**
     * Last modified date.
     */
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    isdone: {
       type: Boolean,
       default: false
   }
}
