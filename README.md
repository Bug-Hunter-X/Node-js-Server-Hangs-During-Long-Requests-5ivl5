# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a server can hang during long-running requests if not handled asynchronously.

## Problem

The `server.js` file contains a simple HTTP server that simulates a long-running task (5 seconds).  During this time, the server becomes unresponsive to new requests, leading to a hang.

## Solution

The `serverSolution.js` file demonstrates a solution using asynchronous operations with Node.js and Express.js to handle requests concurrently without blocking the main thread.