import * as $ from 'jquery';
import { handler as removeSectionEventHandler } from '../lib/removeSectionEventHandler.js';
import { handler as stillAttendingEventHandler } from '../lib/stillAttendingEventHandler.js';

class AddWork {
    constructor(){
        this.el = $(`<fieldset class="work-details row gx-3">
        <div class="d-inline-flex justify-content-between align-items-baseline section-control d-none">
            <h6 class="mb-3">Work</h6>
            <button class="btn btn-outline-danger btn-sm remove-section"><i class="fa fa-trash"></i></button>
        </div>
        <div class="col-12 col-sm-6 col-md-8">
            <label for="name-of-organization">Name of organization</label>
            <input type="text" name="name-of-organization" class="form-control" placeholder="Acme Inc.">
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <label for="position">Position</label>
            <input type="text" name="position" class="form-control" placeholder="Sales Rep">
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <label for="work-location">Location</label>
            <input type="text" name="work-location" class="form-control" placeholder="e.g: Lagos">
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <label for="workStart">From when</label>
            <input type="date" name="work-start" class="form-control">
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <label for="workEnd" class="d-block">To when</label>
            <input type="date" name="work-end" class="form-control">
            <label for="still-attending" class="mt-2">
                <input type="checkbox" class="still-attending"> I'm still working there
            </label>
        </div>
    </fieldset>`)

        this.el.find('.still-attending').on('click', stillAttendingEventHandler)
        this.el.find('.remove-section').on('click', removeSectionEventHandler)
        
        return this.el;        
    }
}

export {AddWork};