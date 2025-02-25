import { ObjectType, Field, InputType } from '@nestjs/graphql';

import { Movie } from 'src/entities/movie.entity';
import { TVShow } from 'src/entities/tvshow.entity';
import { TVEpisode } from 'src/entities/tvepisode.entity';
import { FileType } from 'src/app.dto';

@ObjectType()
export class EnrichedMovie extends Movie {
  @Field({ nullable: true }) public originalTitle?: string;
  @Field({ nullable: true }) public posterPath?: string;
  @Field() public voteAverage!: number;
  @Field() public releaseDate!: string;
}

@ObjectType()
export class EnrichedTVShow extends TVShow {
  @Field({ nullable: true }) public originalTitle?: string;
  @Field({ nullable: true }) public posterPath?: string;
  @Field() public voteAverage!: number;
  @Field() public releaseDate!: string;
}

@ObjectType()
export class EnrichedTVEpisode extends TVEpisode {
  @Field() public voteAverage!: number;
  @Field() public releaseDate?: string;
}

@ObjectType()
export class DownloadingMedia {
  @Field() public id!: string;
  @Field() public title!: string;
  @Field() public tag!: string;
  @Field() public resourceId!: number;
  @Field((_type) => FileType) public resourceType!: FileType;
  @Field() public quality!: string;
  @Field() public torrent!: string;
}

@ObjectType()
export class SearchingMedia {
  @Field() public id!: string;
  @Field() public title!: string;
  @Field() public resourceId!: number;
  @Field((_type) => FileType) public resourceType!: FileType;
}

@InputType()
export class JackettInput {
  @Field() public title!: string;
  @Field() public downloadLink!: string;
  @Field() public quality!: string;
  @Field() public tag!: string;
}
