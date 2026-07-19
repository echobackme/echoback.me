import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Main {
    public static void main(String[] args) throws Exception {
        String portEnv = System.getenv("PORT");
        if (portEnv == null || portEnv.isEmpty()) {
            throw new IllegalStateException("PORT environment variable is not set!");
        }
        int port = Integer.parseInt(portEnv);
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        
        server.createContext("/", exchange -> {
            byte[] response = "{\"status\":\"api_core_stub_ok\"}".getBytes();
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, response.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response);
            }
        });
        
        server.start();
        System.out.println("Minimal Java API Core stub started on port " + port);
    }
}
