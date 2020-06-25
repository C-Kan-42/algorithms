// System Design Overview

// clients , webserver - website's static information, db, app server - API
// Consistent hashing - allows you to reduce/add servers to your system, load balancer
    // Research more

// Grokking the System Design Interview - good resource, online?

// Relational DB/ SQL - storing metadata, data with relations, not easy to scale horizontally (adding more machines), easy to scale vertically (adding more RAM)
    // can't split one table between two machines
    // Partition by functionality, sharding
    // Ex: Facebook

// Sharding - used on relational DBs, where you have to scale horizontally
    // Can divide DB into chunks, can split up users by last name into 2 DBs
    // Or can shard by location, where the user is
    // Need to use consistent hashing if you want to shard by user ID, so they always go to the same server

// Non-relational DB/ noSQL - easy to scale horizontally, can be used as a main DB and a cache (ex, can store pre-rendered HTML)
    // Ex: storage, S3 Amazon bucket
    // Queries are harder

// Goals in System Design: remove any single points of failure and allow scalability

// 2 load balancers working in tandem (to remove single PoF) 
    // Master-slave system
        // Master is on, slave is on standby, slave sends heartbeat to master, if master responds, ok
            // if Master does not respond, slave assumes master is dead, then slave takes over

// Cache
    // global caches, or local cache (in DB, etc), depending on what you need
    // LRU cache
    // cache is always in memory (RAM)
    // Look-up time is way faster for caches
    // Redis - POJO, a bunch of key-value pairs
        // check if there are differences, if yes, get from DB, if not, get from cache
        // Read-through vs. write-through cache
            // Read-through, change in DB, then add to cache
                // Con: Cache is not always up-to-date, might get stale information, users might get different data
            // Write-through, change it in memory cache first, then once in a while to write in DB
                // Con: Can easily lose changes, if cache goes down/does not successfully transfer to DB yet, that's a problem
            // Blog vs. stock-broker

// How to backup DB?
    // Tradeoffs: speed vs. consistency
    // read from the backup DBs, but write to main DB

// CDN (Content Delivery Network), more for static content (e.g. images, headers), server-side cache
    // Network of servers around world
    // peer-to-peer network, allows large files to be transferred quickly
        // you only have to send out your chunk once, and other servers communicate with each other to get all chunks, eventually all servers 
        // will have all chunks

// Long-polling vs. short-polling
    // Long-polling: open connection, server sends out/pushes latest data to clients as soon as it gets new data
    // Short-polling: Normal client-server interaction: Client sends request to server, server responds

// Websockets, back-and-forth communication, server doesn't always need to respond with info back, same for client, full duplex, don't check 
// if other thing got it, always sending

// Proxy
    // Computer acting on behalf of a server
    // Security, buffer for server, from client
// Reverse-proxy
    // Computer acting on behalf of a client
    // Ex: VPN, middleman set up by user
// Anonymous proxy
    // Doesn't tell you it's a proxy
        // doesn't say it's a VPN, looks like it's coming directly from the original source
// Transparent proxy
    // Tells you it's a proxy

// Security
    // block JavaScript lol, use SSL

// [Client] ---> load bal - app 



//             load bal    app/server                     backup 

//   CDN                   app/server         main db  -> backup

//                         app/server
//                                                 backup


//                     cache




// [client              vpn]    ->         app