function Adventure { }

Adventure.prototype.RoomList = [];
Adventure.prototype.Name = "Base Adventure Name";
Adventure.prototype.Description = "Base Adventure Description";

function Room { }

Room.prototype.Id = "XXX1XXX";
Room.prototype.Name = "Base Room Name";
Room.prototype.Description = "Base Room Description";
Room.prototype.Connections = [];

function Connection { }
Connection.prototype.Text = "Connection";
Connection.prototype.ConnectingRoom = "XXX1XXX";

function AdventureRunner(Adventure) { this.CurrentAdventure = Adventure; }
AdventureRunner.prototype.CurrentAdventure = null;
AdventureRunner.prototype.CurrentRoom = null;
