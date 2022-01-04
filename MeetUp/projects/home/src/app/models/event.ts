export class Event{
	// eventName: string;

	// constructor(
	// 	eventName?: string
	// ){
	// 	this.eventName = eventName;
	// }

	constructor(
	public eventID: Number,
	public eventName: String,
	public type: Number,
	public eventDate: Number,
	public eventDescription: String,
	public location: Number,
	){ }
}
