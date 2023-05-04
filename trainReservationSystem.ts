let myFn = () => {
  const ROWS = 11;
  const SEATS_PER_ROW = 7;
  const LAST_ROW_SEATS = 3;

  // initialize the seats matrix
  let seats = Array.from({ length: ROWS }, () => Array(SEATS_PER_ROW).fill(0));
  seats[ROWS - 1] = Array(LAST_ROW_SEATS).fill(0);

  let available_seats = ROWS * SEATS_PER_ROW - LAST_ROW_SEATS; // 80 - last row seats

  while (available_seats > 0) {
    let num_seats = parseInt(
      prompt(
        `Available seats: ${available_seats}\nHow many seats do you want to book?`
      )
    );

    if (num_seats > 7) {
      alert("Sorry, you cannot book more than 7 seats at a time.");
      continue;
    }

    let found_seats = false;

    // search for consecutive seats in one row
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j <= SEATS_PER_ROW - num_seats; j++) {
        let row = seats[i].slice(j, j + num_seats);
        if (row.every((s) => s === 0)) {
          seats[i].fill(1, j, j + num_seats);
          available_seats -= num_seats;
          found_seats = true;
          break;
        }
      }
      if (found_seats) {
        break;
      }
    }

    // search for nearby seats
    if (!found_seats) {
      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < SEATS_PER_ROW; j++) {
          if (seats[i][j] === 0) {
            let nearby_seats = seats[i].slice(j, j + num_seats);
            if (nearby_seats.every((s) => s === 0)) {
              seats[i].fill(1, j, j + num_seats);
              available_seats -= num_seats;
              found_seats = true;
              break;
            }
          }
        }
        if (found_seats) {
          break;
        }
      }
    }
  }
  console.log(seats);
};
