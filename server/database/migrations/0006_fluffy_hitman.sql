CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`text` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now'))
);
