// Build a Playlist Remix Engine

// In this lab, you will build a program that creates a single remix playlist from multiple playlists
// submitted by listeners.

// Each listener provides a list of songs they want to hear. Some songs may appear more than once, and some artists
// may show up too many times. Your job is to work through these playlists step by step: combine them into one lists,
// score each song, remove duplicate songs, limit how often the same artist appears, and then create a final
// play order.

// Work through these playlists by:
// 1. Combine them into one lists,
// 2. Score each song,
// 3. Remove duplicate songs,
// 4. Limit how often the same artist appears,
// 5. Create a final play order

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
// User Stories:
// 1. You should create a function named flattenPlaylists that accepts an array of playlists where each playlist is an array
//    of objects with the following properties: trackId, artist, title, votes, bpm. If the input is not an array,
//    flattenPlaylists should return an empty array. An example playlist has been provided for you. You can use this example
//    to test out your function.

// 2. flattenPlaylists should return a flat array of track objects, where each object includes all the original track properties
//    plus a source property set to an array with the playlist index and the track index indicating where the track originated.

// 3. You should create a function named scoreTracks that accepts an array of track objects as returned by flattenPlaylists
//    (each with trackId, artist, title, votes, bpm, and source properties) and returns a new array of track objects, each with
//    a score property added using the formula: votes * 10 - Math.abs(bpm - 120).

// 4. You should create a function named dedupeTracks that accepts an array of track objects as returned by scoreTracks and returns
//    a new array with duplicate trackId entries removed, keeping only the first occurrence of each.

// 5. You should create a function named enforceArtistQuota that accepts an array of track objects as returned by dedupeTracks and
//    a number representing the maximum allowed occurrences per artist. The function should return a new array where no artist
//    appears more times than the given number, keeping the earliest occurrences.

// 6. You should create a function named buildSchedule that accepts an array of track objects as returned by enforceArtistQuota
//    and returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position
//    in the broadcast order.

// 7. You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences
//    per artist. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling
//    flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.

const playlists = [
    [
        {
        trackId: "trk101",
        artist: "Velvet Comet",
        title: "Crimson Afterglow",
        votes: 5,
        bpm: 122
        },
        {
        trackId: "trk102",
        artist: "Neon Harbor",
        title: "Static Horizon",
        votes: 2,
        bpm: 108
        },
        {
        trackId: "trk103",
        artist: "Lunar Arcade",
        title: "Midnight Frequency",
        votes: 4,
        bpm: 128
        }
    ],
    [
        {
        trackId: "trk201",
        artist: "Solar Echo",
        title: "Glass Skyline",
        votes: 3,
        bpm: 115
        },
        {
        trackId: "trk202",
        artist: "Velvet Comet",
        title: "Satellite Hearts",
        votes: 6,
        bpm: 124
        }
    ]
];

// --------------------------------------------------------------
// Given Multiple Playlist, the program must able to create a remix of music from multiple playlist as a new playlist.
// --------------------------------------------------------------

// Work through these playlists by:
// 1. Combine them into one lists, (Done)
// 2. Score each song, (Done)
// 3. Remove duplicate songs, (Done)
// 4. Limit how often the same artist appears, (Done)
// 5. Create a final play order (Done)

// STEP 1
// 1. Create a function named flattenPlaylists (Done)
// 2. If the input is not an array, function should return an empty array. (Done)
// 3. The function should return a flat array of track objects, where each object includes all the original track properties. Plus a source property set to an array with the playlist index and the track index indicating where the track originated. (Done)

// Flatten the playlists and added a source property using traditional nested for loop...
const flattenPlaylists = playlists => {
    if (!Array.isArray(playlists)) return [];

    const flattenedTracks = [];

    // Map the original track properties to the new structure
    for (let i = 0; i < playlists.length; i++) {
        for (let j = 0; j < playlists[i].length; j++) {
            const playlist = playlists[i];
            const track = playlists[i][j];

            flattenedTracks.push({
                ...track,
                source: [
                    i,
                    j
                ]
            });
        }
    }

    return flattenedTracks;
};

// const tracks = flattenPlaylists(playlists);
// console.log(tracks);

// Alternative: Using ForEach instead of traditional for loop
const flattenPlaylistsForEach = playlists => {
    if (!Array.isArray(playlists)) return [];

    const flattenedTracks = [];

    // Map the original track properties to the new structure
    playlists.forEach((playlist, playlistIndex) => {
        playlist.forEach((track, trackIndex) => {

            flattenedTracks.push({
                ...track,
                source: [
                    playlistIndex,
                    trackIndex
                ]
            });
        });
    })

    return flattenedTracks;
};

// STEP 2
// 1. Create a function named scoreTracks -> Accepts an array of track objects from prev function (Done)
// 2. Returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120) (Done)

// Score each track using given formula
const scoreTracks = tracks => {
    const scoredTracks = [];

    for (let i = 0; i < tracks.length; i++) {
        scoredTracks.push({
            ...tracks[i],
            score: tracks[i].votes * 10 - Math.abs(tracks[i].bpm - 120)
        });
    }

    return scoredTracks;
}

// const scored = scoreTracks(tracks);
// console.log(scored);

// STEP 3
// 1. Create a function named dedupeTracks -> Accepts an array of track objects returned by scoreTracks
// 2. Return a new array with duplicate trackId entries removed, keeping only the first occurence of each.

// Remove Duplicate trackId entries using JavaScript set() -> The fastest approach and more idiomatic
const dedupeTracks = scored => {
    const uniqueTrackIds = new Set();
    const dedupedTracks = [];

    for (let track of scored) {
        if (!uniqueTrackIds.has(track.trackId)) {
            dedupedTracks.push(track);
            // Add the ID to the set so it's marked as seen
            uniqueTrackIds.add(track.trackId);
        }
    }

    return dedupedTracks;
}

// Alternative: Using includes() method.
const dedupeTracksIncludes = scored => {
    const dedupedTracks = [];
    const uniqueIds = [];

    for (let i = 0; i < scored.length; i++) {
        if (!uniqueIds.includes(scored[i].trackId)) {
            dedupedTracks.push(scored[i]);
            uniqueIds.push(scored[i].trackId);
        }
    }

    return dedupedTracks;
}

// const deduped = dedupeTracks(scored);
// console.log(deduped);

// STEP 4
// 1. Create a function named enforceArtistQuota -> Accepts array of track objects returned by dedupeTracks
//    and a number representing the maximum allowed occurences per artist.
// 2. The function return a new array where no artist appears more times than the given number, keeping the earliest occurences.
// Pada playlist batasan jumlah kemunculan artisnya berdasarkan argumen number pada function...

const enforceArtistQuota = (deduped, maxOccurence) => {
    const artistTracker = {};
    const finalResult = [];

    for (const track of deduped) {
        const artist = track.artist;

        // Jika artis tidak ada/undefined, langsung masukkan saja
        if (!artist) {
            finalResult.push(track);
            continue;
        }

        const currentCount = artistTracker[artist] || 0;

        // Hanya masukkan lagu JIKA jumlah saat ini masih di bawah kuota
        if (currentCount < maxOccurence) {
            finalResult.push(track);
            artistTracker[artist] = currentCount + 1;
        }
        // Jika sudah melebihi maxOccurence, lagu diabaikan (dibuang)
    }

    return finalResult;
};

// const enforcedQuota = enforceArtistQuota(deduped, 2);
// console.log(enforcedQuota)

// 2. Alternative dengan Map()
const enforceArtistQuota2 = (deduped, maxOccurence) => {
    const artistTracker = new Map();
    const finalResult = [];

    for (const track of deduped) {
        const artist = track.artist;

        if (!artist) {
            finalResult.push(track);
            continue;
        }

        const currentCount = artistTracker.get(artist) || 0;

        if (currentCount < maxOccurence) {
            finalResult.push(track);
            artistTracker.set(artist, currentCount + 1);
        }
    }

    return finalResult;
};

// STEP 5
// 1. Create a function named buildSchedule that accepts an array of track objects as returned by enforceArtistQuota
// 2. The function returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast order

// 1. Dengan for Loop
const buildSchedule = tracks => {
    const broadcastOrder = [];

    for (let i = 0; i < tracks.length; i++) {
        broadcastOrder.push({
            slot: i + 1,
            trackId: tracks[i].trackId
        });
    }

    return broadcastOrder;
};

// Dengan array map() method
const buildSchedule2 = tracks => tracks.map((track, index) => ({slot: index + 1, trackId: track.trackId}));
// console.log(buildSchedule2(enforcedQuota));

// STEP 6
// 1. Create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist.
// 2. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.

const remixPlaylist = (playlists, maxOccurrences) => {
    const combinedPlaylists = flattenPlaylists(playlists);
    const scoredPlaylists = scoreTracks(combinedPlaylists);
    const dedupedPlaylists = dedupeTracks(scoredPlaylists);
    const enforcedQuotaPlaylists = enforceArtistQuota(dedupedPlaylists, maxOccurrences);
    const scheduledPlaylists = buildSchedule(enforcedQuotaPlaylists);

    return scheduledPlaylists;
};

// With Method Chaining
const remixPlaylist2 = (playlists, maxOccurrences) => {
    return buildSchedule(
        enforceArtistQuota(
            dedupeTracks(
                scoreTracks(
                    flattenPlaylists(playlists)
                )
            ),
            maxOccurrences
        )
    );
};

console.log(remixPlaylist(playlists, 2));
