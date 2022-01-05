export class createEvent{
	constructor(
	public eventName: String,
	public type: String,
	public eventDate: String,
	public eventDescription: String,
	public location: String,
	public userAdded: Boolean,
	public eventPrice: Number,
	public eventID?: Number,
	){ }
}
