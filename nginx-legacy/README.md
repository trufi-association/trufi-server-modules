# nginx-legacy

We use `nginx` as reserve proxy for the modules.

## Use for development

For development/testing purpose you can skip the TLS part and can run traffic unencrypted in a trusted network. To initialize that mode you need to run `init.dev`. This setup is also feasible if you have already another reverse proxy doing TLS termination and redirecting traffic inside a trusted network to this reverse proxy.

## Use for production

For production where internet HTTP(S) traffic directly terminates here, you need to set up TLS for encrypted traffic from the clients to this `nginx` instance. To initialize that mode you need to run `init.prod <domain name to use>` e.g. `./init.prod backend.example.com`.

## Setting up

Both init scripts create a folder. `init.dev` creates a `dev` folder and `init.prod` creates a `data` folder. Inside that folder there is a file `app.conf` or `nginx/app.conf`.

These file contain a `# extensions` stanca. Below that you need to insert the contents of `nginx.conf` file in each of the modules' folder you use.

## Starting

For development/testing purpose you need to run `docker-compose -f docker-compose.dev.yml up --build`

For production purpose you need to run `docker-compose -f docker-compose.dev.yml up --build --detach`
