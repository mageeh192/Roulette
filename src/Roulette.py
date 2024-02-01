import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        L = self.request.path.split("/")

        self.render( "roulette.html")