import {Source} from "../domain/model/source.entity.js";

const logoApi =new logoApi();

export class SourceAssembler{
    static toEntityFromResponse(response){
        if(response.data.status !== "ok"){
            console.error('$(response.status), $(response.code), $(response.message)');
            return [];
        }
        const sourceResponse = response.data;
        return sourceResponse.sources.map((source) => { return this.toEntityFromResource(source) });
        }

        static toEntityFromResource(resource) {
        let source = new Source({...resource});
        source.urlToLogo = source.url !== ''
        ? logoApi.getUrlToLogo(source.url)
            : '';
        return source;
    }
}