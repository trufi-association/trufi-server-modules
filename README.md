# trufi-server-modules

A repository as a recipe to create your own production backend environment which powers your very own version of Trufi App. This only contains the services which actually **consume & serve but <u>do not create</u>**

- the search index (consumed by module `photon`)
- the mbtile (map tiles for your region) (consumed by module `tileserver` or `vectortileserver`)
- the static png tiles for your region) (consumed by module `static_maps`)
- the routing graph (consumed by module `otp` - **O**pen**T**rip**P**lanner )

and of course Nginx which combines these modules to one service to make them appear as _one_ with _one_ HTTPS certificate, web identity and url scheme.

If you actually need to create the stuff e.g. the mbtiles or the graph you better go to [Trufi Server Resources](https://github.com/trufi-association/trufi-server-resources).

## Concept

This repository contains a bunch of service „modules“ rather than just one big service containing everything. This allows a community to just run what they need using nginx as web proxy for production environments. Each "module" has a specified job and contains a README.

## Modules

You can find all in the [root](.) folder. Each module has a README file with more detailed info.

- **[otp](./otp)**
  This is [OpenTripPlanner](https://opentripplanner.org) used to calculate the best route for the user of the app. _This service is mandatory for the app to work._
- **[photon](./photon)**
  This is [Photon by Komoot](https://photon.komoot.io) used to provide online search results inside the app when the user searches for a POI to navigate from or to using public transportation.
- **[static_maps](./static_maps)**
  Use this service to serve pre-generated background map tiles. _This use of the service is optional but we recommend it if you have a server which is less in resources._
- **[tileserver](./tileserver)**
  Use this service to serve the data needed to display the background map shown in the app. This does not include the styling (e.g. a highways are yellow lines and the water blue). The styling is done on the client side. This allows you/us to make modifications to the stylings without the need to rerender all pngs of the background map for your city. It generates the png background map tiles on the fly for clients which do not support dynamic map tiles. _This use of the service is optional and cause much CPU usage when it needs to generate background maps on the fly (this is a wrong usage of this service). Our app currently does not support client side rendering of background maps so we only recommend using this service on a server with much CPU resources._
- **[vectortileserver](./vectortileserver/)**
  Use this service to serve vector tiles needed to display the background map shown in the app. This does not include the styling (e.g. a highways are yellow lines and the water blue). The styling and rendering is done on the client side. **The traditional Trufi Core based on Dart/Flutter does not support vector tiles. Use `tileserver` or `static-maps` which both can serve raster tiles (png).**
- **[nginx-legacy](./nginx-legacy)**
  This service serves as a reverse proxy which stands in the middle between the client and the modules. It hides most resources modules expose through their HTTP endpoints and only allows access to those actually needed by clients. This is achieved by a `nginx.conf` each module has. NGINX also handles the SSL encryption stuff for the modules so not each single module need to do that by itself. The use of this module is **mandatory** in production environments.
- **[nginx-dynamic](./nginx-dynamic)**
  This service serves as a reverse proxy which stands in the middle between the client and the modules. Unlike `nginx-legacy` this does not require the contents of a `nginx.conf` of a module. Instead it computes the service name using an url pattern. It also handles the SSL encryption stuff for the modules so not each single module need to do that by itself.

Concerning background map tiles: Decide wethever you want to use the module _static_maps_, _tileserver_ or _vectortileserver_. Using all of them is pointless.

### Add additional modules

You are open to use more modules than those provided here as this structure works for all modules compatible to our conventions. Across our repos you can find additional modules to clone into here. These have a `tsm-` prefix. Download them by doing a clone into this directory. They should have a README telling you how to use them.
