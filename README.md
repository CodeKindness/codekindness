# README

## About

Boilerplate Sinatra application ready with latest trending grid framework <a href="#">Twitter Bootstrap</a> and Javascript library <a href="#">jQuery</a>.

## Running

Download repositiory:

```
$ git clone git@github.com:michaelminter/sinatra-boilerplate.git --origin newprojectname
```

Create RVM environment (if necessary):

```
rvm use 1.9.2@projectname
```

Install dependencies:

```
bundle install
```

Run this application:

```
$ shotgun app.rb
```

and load <http://localhost:9393> in your browser

### or

```
$ ruby app.rb
```

and load <http://localhost:4567> in your browser

> __Shotgun__ will actually restart your application on every request. This has the advantage over other reloading techniques of always producing correct results. However, since it actually restarts your application, it is rather slow compared to the alternatives. Moreover, since it relies on fork, it is not available on Windows and JRuby.

