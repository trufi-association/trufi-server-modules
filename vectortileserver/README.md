# Module `vectortileserver`

|                                        |                                                                                                          |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| This depends on the following builders | [mbtiles-builder](https://github.com/trufi-association/trufi-server-resources/tree/main/mbtiles-builder) |

It uses the MBTiles files from path `../tileserver/data` so this extension is fully compatible with `mbtiles-builder`.

## Description

This module is using [Consbios' mbtileserver](https://github.com/consbio/mbtileserver). It serves vector tiles. As it does not serve raster (png) tiles, clients without support for vector tiles cannot use this module. If you need to support clients only capable of using raster tiles, then use module [tileserver](../tileserver/) instead.

The app needs this extension or the alternative to be able to display a background map to the user.

## Usage

```bash
sudo docker-compose up
```

If endpoint is exposed via `nginx-legacy` module, then try `http://localhost:8080/vector-tiles/`
