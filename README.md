# Simple Planning Poker

An very simple planning poker online web application built with React.
It uses [PubNub](https://www.pubnub.com) to send messages between clients.
It doesn't use any server.

[Demo : https://simple-planning-poker.com](https://simple-planning-poker.com)

![Home page](https://simple-poker-planning/app-screenshots/home-1-0-0.jpg)
![Poker session page](https://simple-poker-planning/app-screenshots/session-1-0-0.jpg)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```

### Installing

Clone the repository

```

git clone https://github.com/damien-monni/simple-planning-poker.git

```

Go to cloned repository and install dependencies

```

cd simple-planning-poker
npm install

```

Copy file .env.example to .env.local and add your PubNub keys to it

That's it! You can start it locally:

```

npm start

```


## Deployment

Just run `npm build` and host files on any static hosting provider.

## Built With

* [React (using React Hooks 💪)](https://reactjs.org) - A JavaScript library for building user interfaces.
* [PubNub](https://www.pubnub.com) - Send messages between clients through web socket very easily.

## Contributing

Pull Request are welcomed!

## Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Damien Monni** - *Initial work* - [LinkedIn](https://www.linkedin.com/in/damien-monni)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
```
