# Module `nginx-dynamic`

|                                         |      |
| --------------------------------------- | ---- |
| This depends on the following builders: |      |

## Description

A module which is using `nginx` under the hood to offer a reverse proxy for all other modules. This allows a client to access all started modules and their resources they expose through their web API under **one** domain and port. It handles HTTP(S) communication and deals as a woman-in-the-middle.

## How to use

For testing or in cases where this is also a behind another reverse proxy you can run it in development mode. That needs to initialized by executing `./init.dev`.

For cases this module can be directly accessed from the web (no woman-in-the-middle handling HTTPS for it) you need to initialize production mode by executing `./init.prod` . This will activate HTTPS and will get you a certificate from Let’s Encrypt so hackers have a harder way.

If you are using this under Windows (for whatever good reason) you need to go into the code of the initialization script and manually perform the steps the script would do for you.

No other configuration necessary.

Finally start it using

```bash
sudo docker-compose up
```

