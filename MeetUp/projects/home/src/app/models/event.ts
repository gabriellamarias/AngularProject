export class Event{
	constructor(
	public eventName: String,
	public type: String,
	public eventDate: String,
	public eventDescription: String,
	public location: Number,
	public userAdded: Boolean,
	public eventPrice: Number,
	public eventID?: Number,
	){ }
}
