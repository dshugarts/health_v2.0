const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const passport = require('./strategies/sql.localstrategy');
const sessionConfig = require('./modules/session-middleware');

let env = require('dotenv');
env.config();

// Route includes
const userRouter = require('./routes/user.router');
const dataRouter = require('./routes/data.router');
const pathRouter = require('./routes/path.router');
const signupRouter = require('./routes/signup.router');
const scoringRouter = require('./routes/scoring.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Filestack Key Call
const FILESTACK_KEY = process.env.FILESTACK_KEY;
app.get('/filestack-key', (req, res) => {
    res.send(FILESTACK_KEY);
})

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/data', dataRouter);
app.use('/path', pathRouter);
app.use('/signup', signupRouter);
app.use('/scoring', scoringRouter);

// Serve static files
app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
