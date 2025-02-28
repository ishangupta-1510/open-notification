import { AppInterfaces } from "../interfaces";
import express from 'express';
import { AppRepositories } from "../repository";
import { AppServices } from "../services";

const app = express();

const repos = {
    user : new AppRepositories.User()
};

app.locals.services = {
    user: new AppServices.User(repos.user)
}

export default app;