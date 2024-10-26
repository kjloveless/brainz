import { MusicBrainzApi } from "musicbrainz-api";

const mbApi = new MusicBrainzApi({
    appName: "sky-brainz",
    appVersion: "0.1.0",
});

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const artist = prompt("please enter an artist: ");
  console.log(await mbApi.search('artist', {query: `${artist}*`}));
}
