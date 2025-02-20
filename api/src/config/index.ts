import http from "http";
import mongoose from "mongoose";

class Config {
  async start(
    serverConfig: { server: http.Server; PORT: string },
    dbURI: string
  ) {
    await this.connectDB(dbURI);
    serverConfig.server.listen(serverConfig.PORT, () => {
      console.log("Server Listening @ PORT: ", serverConfig.PORT);
    });
  }

  private async connectDB(uri: string) {
    console.log("Connecting DB....");
    await mongoose.connect(uri);
    console.log("DB Connected successfuylly");
  }
}

export default Config;
