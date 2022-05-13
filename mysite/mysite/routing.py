from channels.routing import ProtocolTypeRouter
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import dominion.routing

application = ProtocolTypeRouter({
        'websocket': AuthMiddlewareStack(
        URLRouter(
            dominion.routing.websocket_urlpatterns
        )
    ),
})