When building, the image optimizer might need an upgraded `libpng`. This is due to a bug in mozjpeg/imagemin. See these issues:

* [https://github.com/imagemin/imagemin-mozjpeg/issues/23](https://github.com/imagemin/imagemin-mozjpeg/issues/23)
* [https://github.com/tcoopman/image-webpack-loader/issues/51](https://github.com/tcoopman/image-webpack-loader/issues/51)
* [https://github.com/imagemin/mozjpeg-bin/issues/18](https://github.com/imagemin/mozjpeg-bin/issues/18)

If build fails with an error like this 

```
cjpeg requires version 36.0.0 or later, but libpng16.16.dylib provides version 27.0.0
```

Then upgrade libpng by running:

```
brew install libpng
```

Upgrading might ask you to first unlink libpng. Do that by.

```
brew unlink libpng
```