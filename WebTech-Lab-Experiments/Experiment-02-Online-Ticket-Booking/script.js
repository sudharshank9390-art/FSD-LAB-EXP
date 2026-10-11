const events = [
  { id: 1, name: 'Tech Fest 2026', price: 500, available: 10 },
  { id: 2, name: 'Music Night', price: 750, available: 6 },
  { id: 3, name: 'Coding Expo', price: 400, available: 3 },
  { id: 4, name: 'Cultural Showcase', price: 600, available: 8 },
];

const eventList = document.getElementById('eventList');
const eventSelect = document.getElementById('eventSelect');
const bookingForm = document.getElementById('bookingForm');
const statusBox = document.getElementById('status');

const renderEvents = () => {
  eventList.innerHTML = events
    .map((event) => `
      <div class="event-card">
        <h3>${event.name}</h3>
        <p>Price: ₹${event.price}</p>
        <p>Available: ${event.available}</p>
      </div>
    `)
    .join('');

  eventSelect.innerHTML = events
    .map((event) => `<option value="${event.id}">${event.name} - ₹${event.price}</option>`)
    .join('');
};

const checkAvailability = (eventId, quantity, callback) => {
  setTimeout(() => {
    const event = events.find((item) => item.id === Number(eventId));

    if (!event) {
      callback(new Error('Selected event is not valid.'));
      return;
    }

    if (quantity < 1 || quantity > 10) {
      callback(new Error('Ticket quantity must be between 1 and 10.'));
      return;
    }

    if (event.available < quantity) {
      callback(new Error(`Only ${event.available} tickets left for ${event.name}.`));
      return;
    }

    callback(null, event);
  }, 1000);
};

const processBooking = (eventId, quantity) => {
  return new Promise((resolve, reject) => {
    checkAvailability(eventId, quantity, (error, event) => {
      if (error) {
        reject(error);
        return;
      }
      setTimeout(() => {
        const totalPrice = event.price * quantity;
        const bookingId = `BK-${Date.now()}`;
        resolve({ bookingId, totalPrice, eventName: event.name });
      }, 1200);
    });
  });
};

bookingForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const eventId = eventSelect.value;
  const quantity = Number(document.getElementById('ticketQty').value);

  statusBox.className = 'status';
  statusBox.textContent = 'Checking ticket availability...';

  try {
    const booking = await processBooking(eventId, quantity);
    const selectedEvent = events.find((item) => item.id === Number(eventId));
    selectedEvent.available -= quantity;

    statusBox.classList.add('success');
    statusBox.innerHTML = `
      <strong>Booking Successful!</strong><br>
      Event: ${booking.eventName}<br>
      Tickets: ${quantity}<br>
      Booking ID: ${booking.bookingId}<br>
      Total Price: ₹${booking.totalPrice}
    `;
  } catch (error) {
    statusBox.classList.add('error');
    statusBox.textContent = error.message;
  }
});

renderEvents();
