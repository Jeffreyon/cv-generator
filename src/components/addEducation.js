import * as $ from 'jquery';
import {formData, fillFormData} from '../lib/form-data.js'
import { handler as removeSectionEventHandler } from '../lib/removeSectionEventHandler.js';
import { handler as stillAttendingEventHandler } from '../lib/stillAttendingEventHandler.js';

class AddEducation {
    constructor(){
        this.el = $(`<fieldset class="education-details row gx-3">
        <div class="d-inline-flex justify-content-between align-items-baseline section-control d-none">
            <h6 class="mb-3">Education</h6>
            <button class="btn btn-outline-danger btn-sm remove-section">Remove</button>
        </div>
        <div class="col-8">
            <label for="name-of-institute">Name of institute</label>
            <input type="text" name="name-of-institute" class="form-control" placeholder="University of Nigeria">
        </div>
        <div class="col-4">
            <label for="location">Location</label>
            <input type="text" name="location" class="form-control" placeholder="Nsukka">
        </div>
        <div class="col-4 position-relative">
            <label for="type-of-institute">Type of institute</label>
            <select name="type-of-institute" id="type-of-institute" class="form-control">
                <option value="" disabled selected>Choose...</option>
            </select>
            <i class="fa fa-chevron-down"></i>
        </div>
        <div class="col-4 position-relative">
            <label for="qualification">Qualification Obtained</label>
            <select name="qualification" id="qualification" class="form-control">
                <option value="" disabled selected>Select an institute first...</option>
            </select>
            <i class="fa fa-chevron-down"></i>
        </div>
        <div class="col-4">
            <label for="started">Started when</label>
            <input type="date" name="started" id="started" class="form-control">
        </div>
        <div class="col-4">
            <label for="finished">Finished when</label>
            <input type="date" name="finished" class="form-control">
            <label for="still-attending" class="mt-2">
                <input type="checkbox" class="still-attending"> I've not finished
            </label>
        </div>
        </fieldset>`)

        let instituteSelect = this.el.find('select[name="type-of-institute"]');
        let qualificationSelect = this.el.find('select[name="qualification"]');

        fillFormData(instituteSelect, formData.typesOfInstitute, qualificationSelect);

        this.el.find('.still-attending').on('click', stillAttendingEventHandler)
        this.el.find('.remove-section').on('click', removeSectionEventHandler)
        
        return this.el;        
    }
}

export {AddEducation};